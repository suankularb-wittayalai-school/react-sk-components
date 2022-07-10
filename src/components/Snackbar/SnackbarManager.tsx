// Modules
import { AnimatePresence } from "framer-motion";
import { useEffect, useReducer, useState } from "react";

// Components
import Snackbar from "./Snackbar";

type WaitingSnackbar = {
  id: string;
  text: string;
  persistent?: boolean;
};

export interface SnackbarManagerProps {
  queue: WaitingSnackbar[];
  setQueue: (newQueue: WaitingSnackbar[]) => void;
}

const SnackbarManager = ({
  queue,
  setQueue,
}: SnackbarManagerProps): JSX.Element => {
  const [current, setCurrent] = useState<WaitingSnackbar | null>(null);
  const [internalQueue, setInternalQueue] = useState<WaitingSnackbar[]>([]);

  const [goingThroughQueue, setGoingThroughQueue] = useState<boolean>(false);
  const [accepting, setAccepting] = useState<boolean>(true);

  // (@SiravitPhokeed)
  // This implementation barely works. It’s almost embarassing for me to put
  // my name on this. Oh well.
  // Can someone redo this? Thanks.

  // States: current, itemsServed, internalQueue
  // 1. Copy `queue` into `internalQueue`
  // 2. Listen for changes in `internalQueue`
  //    1. Set `itemsServed` to 0
  //    2. Loop through `internalQueue`
  //       1. Set `current` to `internalQueueItem`
  //       2. Wait 5 seconds
  //       3. Set `current` to null
  //       4. Increase `itemsServed` by 1
  //    3. If `queue`’s length is more than `itemsServed` (haven’t shown everything yet)
  //       1. Set `internalQueue` to `queue` sliced with `itemsServed` as start
  //    4. Else
  //       1. Completely clear `queue`

  useEffect(() => {
    async function goThroughQueue() {
      setGoingThroughQueue(true);
      for (let internalQueueItem of internalQueue) {
        setCurrent(internalQueueItem);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setCurrent(null);
      }
      setGoingThroughQueue(false);
      setAccepting(true);
    }

    if (queue.length > 0 && internalQueue.length > 0) goThroughQueue();
  }, [internalQueue]);

  useEffect(() => {
    if (accepting) {
      if (queue.length > internalQueue.length) {
        setAccepting(false);
        setInternalQueue(queue.slice(internalQueue.length));
      } else if (queue.length > 0) {
        setInternalQueue([])
        setQueue([]);
      }
    } else if (!goingThroughQueue && queue.length > 0) {
      setInternalQueue(queue);
    }
  }, [accepting, queue]);

  // DEBUG
  // useEffect(() => {
  //   console.log({ queue, goingThroughQueue, internalQueue, current });
  // }, [queue, goingThroughQueue, internalQueue, current]);
  // END-DEBUG

  return (
    <aside>
      {/* DEBUG */}
      {/* <p
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          width: 960,
          zIndex: 100,
          pointerEvents: "none",
          backdropFilter: "blur(8px)",
        }}
      >
        <strong>Queue</strong>: {JSON.stringify(queue)}
        <br />
        <strong>Going through queue</strong>: {goingThroughQueue ? "✅" : "❎"}
        <br />
        <strong>Accepting new queue items</strong>: {accepting ? "✅" : "❎"}
        <br />
        <strong>Still more to go through</strong>
        {": "}
        {queue.length > internalQueue.length
          ? JSON.stringify(queue.slice(internalQueue.length))
          : "DONE"}
        <br />
        <strong>Internal queue</strong>: {JSON.stringify(internalQueue)}
        <br />
        <strong>Current</strong>: {JSON.stringify(current)}
        <br />
      </p> */}
      {/* END-DEBUG */}

      <AnimatePresence>
        {current && (
          <Snackbar
            id={current.id}
            text={current.text}
            onClose={() => setQueue(queue.slice(1))}
          />
        )}
      </AnimatePresence>
    </aside>
  );
};

export default SnackbarManager;
