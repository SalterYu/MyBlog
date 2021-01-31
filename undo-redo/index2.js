const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const createIncrementCommand = (counter, value) => {
  const previousCount = counter.count;

  return {
    execute() {
      counter.count += 1;
    },
    undo() {
      counter.count = previousCount;
    }
  }
}

const createDecrementCommand = (counter) => {
  const previousCount = counter.count;

  return {
    execute() {
      counter.count -= 1;
    },
    undo() {
      counter.count = previousCount;
    }
  }
}

const commands = {
  [INCREMENT]: createIncrementCommand,
  [DECREMENT]: createDecrementCommand
}

const createNamedCounter = (name) => {
  return {
    name,
    count: 0
  }
}

const createCommandManager = (target) => {
  let history = [null];
  let position = 0;

  return {
    doCommand(commandType) {
      if (position < history.length - 1) {
        history = history.slice(0, position + 1);
      }

      if (commands[commandType]) {
        const concreteCommand = commands[commandType](target);
        history.push(concreteCommand);
        position += 1;

        concreteCommand.execute();
      }
    },

    undo() {
      if (position > 0) {
        history[position].undo();
        position -= 1;
      }
    },

    redo() {
      if (position < history.length - 1) {
        position += 1;
        history[position].execute();
      }
    }
  }
}

const quinnCounter = createNamedCounter({a: 1});
console.log(quinnCounter); // => { name: 'Quinn', count: 0 }

const quinnCountManager = createCommandManager(quinnCounter);

quinnCountManager.doCommand(INCREMENT);
console.log(quinnCounter); // => { name: 'Quinn', count: 1 }

quinnCountManager.doCommand(INCREMENT);
console.log(quinnCounter); // => { name: 'Quinn', count: 2 }

quinnCountManager.doCommand(DECREMENT);
console.log(quinnCounter); // => { name: 'Quinn', count: 1 }

quinnCountManager.undo();
console.log(quinnCounter); // => { name: 'Quinn', count: 2 }

quinnCountManager.redo();
console.log(quinnCounter); // => { name: 'Quinn', count: 1 }
