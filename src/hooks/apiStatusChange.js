import { useEffect, useRef } from 'react';

export const useApiStatusChangeEffect = (status, callback, fromStatus, toStatus) => {
  const prevStatus = useRef(status);

  useEffect(() => {
    // console.log('inside useeffect  prevStatus.current , fromStatus ', prevStatus.current, status);
    if (prevStatus.current === fromStatus && toStatus.includes(status)) {
      // console.log('before callback');
      callback();
    }
    prevStatus.current = status;
  }, [status, fromStatus, toStatus, callback]);
};
