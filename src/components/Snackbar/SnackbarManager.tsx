// Modules
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Components
import Snackbar from "./Snackbar";

// Types
import { SnackbarProps } from "./Snackbar";

type WaitingSnackbar = Omit<SnackbarProps, "onClose" | "isAboveFAB">;

export interface SnackbarManagerProps {
  queue: WaitingSnackbar[];
  setQueue: (newQueue: WaitingSnackbar[]) => void;
  isAboveFAB?: boolean;
}

const SnackbarManager = ({
  queue,
  setQueue,
  isAboveFAB,
}: SnackbarManagerProps): JSX.Element => {
  const [current, setCurrent] = useState<WaitingSnackbar | null>(null);
  const [internalQueue, setInternalQueue] = useState<WaitingSnackbar[]>([]);

  const [goingThroughQueue, setGoingThroughQueue] = useState<boolean>(false);
  const [accepting, setAccepting] = useState<boolean>(true);

  // (@SiravitPhokeed)
  // I don’t know how but this code works and I’m too scared to touch it.

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

    if (!goingThroughQueue) goThroughQueue();
  }, [internalQueue]);

  useEffect(() => {
    if (accepting) {
      if (queue.length > internalQueue.length) {
        setAccepting(false);
        setInternalQueue(queue.slice(internalQueue.length));
      } else if (queue.length > 0) {
        setInternalQueue([]);
        setQueue([]);
      }
    } else if (!goingThroughQueue && queue.length > 0) {
      setInternalQueue(queue);
    }
  }, [accepting, queue]);

  return (
    <aside>
      <AnimatePresence>
        {current && (
          <Snackbar
            id={current.id}
            text={current.text}
            action={current.action}
            isStacked={current.isStacked}
            isAboveFAB={isAboveFAB}
            onClose={() => {
              setCurrent(null);
              setQueue(queue.slice(1));
            }}
          />
        )}
      </AnimatePresence>
    </aside>
  );
};

export default SnackbarManager;
