// Modules
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

  // Utils
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // DEBUG
  useEffect(() => {
    console.log({ queue, internalQueue, current });
  }, [queue, internalQueue, current]);
  // END-DEBUG

  // useEffect(() => setInternalQueue(queue), [queue]);

  // useEffect(() => {
  //   if (queue.length > 0) setCurrent(queue[0]);
  // }, [queue[0]]);

  // useEffect(() => {
  //   if (current) {
  //     const newQueue = internalQueue;
  //     newQueue.shift();
  //     setInternalQueue(newQueue);

  //     setTimeout(() => {
  //       setCurrent(null);
  //       setQueue(internalQueue);
  //       if (internalQueue.length > 0) setCurrent(internalQueue[0]);
  //     }, 6000);
  //   }
  // }, [current]);

  useEffect(() => {
    console.log({ queueInQueue: queue });
    if (queue.length > 0) {
      console.log("queue is longer than 0");
      setCurrent(queue[0]);
      console.log("current is set to first item of queue");
    } else setCurrent(null);
  }, [queue[0]]);

  useEffect(() => {
    console.log({ queueInCurrent: queue });
    if (current) {
      console.log("timer will start");
      setTimeout(() => {
        console.log("5 seconds have past");
        console.log({ queueInTimeOut: queue });
        console.log({ newQueueShouldBe: queue.slice(1) });
        setQueue(queue.slice(1));
        console.log("first queue item is removed");
      }, 5000);
    } else {
      setCurrent(queue[0]);
    }
  }, [current]);

  useEffect(() => {
    console.log({ queueInQueue: queue });
    setTimeout(() => {
      console.log({ queueInTimeout: queue });
      setQueue(queue.slice(1));
    }, 5000);
  }, [queue[0]]);

  return (
    <aside>
      {/* DEBUG */}
      <p
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          width: 960,
          zIndex: 100,
        }}
      >
        <strong>Queue</strong>: {JSON.stringify(queue)}
        <br />
        <strong>Internal queue</strong>: {JSON.stringify(internalQueue)}
        <br />
        <strong>Current</strong>: {JSON.stringify(current)}
        <br />
      </p>
      {/* END-DEBUG */}

      <AnimatePresence>
        {queue[0] && (
          <Snackbar
            id={queue[0].id}
            text={queue[0].text}
            onClose={() => setQueue(queue.slice(1))}
          />
        )}
      </AnimatePresence>
    </aside>
  );
};

export default SnackbarManager;
