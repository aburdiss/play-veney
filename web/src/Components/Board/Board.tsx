import './Board.scss';

export default function Board() {
  return (
    <div>
      {new Array(16).map(function (_, row) {
        return ['w', 'x', 'y', 'z'].map(function (column) {
          return <div key={column + row} id={column + (row + 1)} />;
        });
      })}
    </div>
  );
}
