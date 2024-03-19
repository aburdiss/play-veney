from pathlib import Path
import json


class GameState:

    def __init__(self) -> None:
        self.history = ""  # no history
        # board is a list of lists of strings. Each list can 
        # vertical configuration, 16 rows and 4 columns, like https://veney.xyz/images/boardgray_brightlr.webp
        self.board = [[[""] for _ in range(4)] for _ in range(16)] 
        
        self.discard_pile = [""]  # no pieces in the discard
        self._notation_to_index_dict = {
            "w": 0,
            "x": 1,
            "y": 2,
            "z": 3,
        }

    def _notation_to_index(self, pos_str: str) -> int:
        # TODO: better version, this is inelegant
        try:
            return self._notation_to_index_dict[pos_str.lower()]
        except KeyError:
            return 16 - int(pos_str) 

    def set_position(self, col: str, row: str, pieces: list):
        """e.g. if we want to set W13 to have a Sword on it, we do set_position(col='W', row='13', pieces='$')"""
        col_index = self._notation_to_index(col)
        row_index = self._notation_to_index(row)

        print(f"row index, col index: {row_index},{col_index}")
        if not pieces:
            self.board[row_index][col_index] = [""]
        else:
            self.board[row_index][col_index] = [piece for piece in pieces]

    def save_state(self, gamestate_file: Path):
        gamestate_dict = {
            "history": self.history,
            "board": self.board,
            "discard_pile": self.discard_pile,
        }

        with open(gamestate_file, "w") as f:
            json.dump(gamestate_dict, f)

    def load_state(self, gamestate_file: Path):
        with open(gamestate_file, "r") as f:
            gamestate = json.load(f)

            self.history = gamestate["history"]
            self.board = gamestate["board"]
            self.discard_pile = gamestate["discard_pile"]


    def __repr__(self) -> str:
        """
        detailed print for debug purposes
        """
        column_width = 3

        repr = f"\n\nGAME STATE\nhistory: {self.history}\n"
        repr = repr + f"Discard Pile: {self.discard_pile}\n"
        repr = repr + "board: \n"
        

        for i, row in enumerate(self.board):
            repr  = repr + f"{16-i:<{column_width}}"
            for col in row:
                pieces = col[0]
                repr = repr + f"|{str(pieces):^{column_width}}"
            repr = repr +"|"+"\n"
            repr= repr+"-"*5*(column_width+1) +"\n"


        for letter in " wxyz":
            repr = repr + f"{letter:^{column_width+1}}"
        repr = repr +"\n"
        
        return repr


if __name__ == "__main__":
    test_file = "test_file.json"
    gamestate = GameState()
    print(f"History at start is {gamestate.history}")
    



    for piece, col in zip("C$SB", "WXYZ"):
        gamestate.set_position(row="4", col=col, pieces=[piece])

    for piece, col in zip("BS$C", "WXYZ"):
        gamestate.set_position(row="13", col=col, pieces=[piece])

    for col in "wxyz":
        gamestate.set_position(row="5", col=col, pieces="e")
        gamestate.set_position(row="12", col=col, pieces="e")

    print(f"gamestate after first set is {gamestate}")

    gamestate.history = "1. aw"

    print(f"History after first meta-move is {gamestate.history}")

    
    gamestate.save_state(test_file)
    print(f"saving state at this point to {test_file}")

    gamestate.history = "1. aw W6" # move the engagement on W to 6
    gamestate.set_position(col="w", row="5", pieces="")
    gamestate.set_position(col="w", row="6", pieces="e")

    print(f"gamestate after first turn is {gamestate}")

    print(f"loading state from {test_file}")
    gamestate.load_state(test_file)

    print(f"History after loading is {gamestate.history}")

    print(gamestate)