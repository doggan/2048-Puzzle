function Tile(position, correctPosition, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value;
  this.correctPosition = correctPosition;

  this.displayValue     = 1 << (value - 1);
  this.previousPosition = null;
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.isInCorrectPosition = function () {
  return (this.x == this.correctPosition.x &&
          this.y == this.correctPosition.y);
}

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value,
    correctPosition: this.correctPosition
  };
};
