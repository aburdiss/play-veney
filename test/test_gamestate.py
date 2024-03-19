from veney.gamestate import GameState
# https://docs.pytest.org/en/latest/getting-started.html#get-started

def test_save_and_load_default_setup():
    test_state = GameState()
    out_path = "foo.json"

    test_state.save_state(Path(out_path))