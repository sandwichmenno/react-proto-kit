import {useState, useEffect} from "react";
import React from "react";

const useTracker = (callback) => {
    const [trackingHistory, setTrackingHistory] = useState([]);

    useEffect(() => {
        callback();
    }, [trackingHistory]);

    const trackEvent = event => {
        setTrackingHistory(trackHistory => ([ ...trackHistory, event ]));
    }

    return {
        trackEvent,
        trackingHistory,
    }
};

export default useTracker;