/**
 * Problem 2694: Event Emitter
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. 1 <= actions.length <= 10
 *   2. values.length === actions.length
 *   3. All test cases are valid, e.g. you don't need to handle scenarios when
 *      unsubscribing from a non-existing subscription.
 *   4. There are only 4 different actions: EventEmitter, emit, subscribe, and
 *      unsubscribe.
 *   5. The EventEmitter action doesn't take any arguments.
 *   6. The emit action takes between either 1 or 2 arguments. The first argument is the
 *      name of the event we want to emit, and the 2nd argument is passed to the callback
 *      functions.
 *   7. The subscribe action takes 2 arguments, where the first one is the event name and
 *      the second is the callback function.
 *   8. The unsubscribe action takes one argument, which is the 0-indexed order of the
 *      subscription made before.
 */

// TODO: Finish solution.

type Subscription = { unsubscribe(): void };
type Callback = (...args: unknown[]) => unknown;

class EventEmitter {
  listeners: { [name: string]: Callback[] } = {};

  subscribe(name: string, fn: Callback): Subscription {
    return { unsubscribe: () => {} };
  }

  emit(name: string, args?: unknown[]): unknown[] {
    return [];
  }
}

export {};
