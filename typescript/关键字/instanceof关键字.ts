
abstract class IPadder {
  abstract getPaddingString(): string;
}

class SpaceRepeatingPadder implements IPadder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements IPadder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: IPadder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}


