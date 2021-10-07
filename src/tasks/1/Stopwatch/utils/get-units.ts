export const getUnits = (time: number) => {
    const seconds = time / 1000;

    const min = Math.floor(seconds / 60).toString();
    const sec = Math.floor(seconds % 60).toString();
    const msec = (seconds % 1).toFixed(3).substring(2);

    return `${min}:${sec}:${msec}`;
};
