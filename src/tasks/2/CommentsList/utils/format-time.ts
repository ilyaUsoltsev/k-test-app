export const formatTimeForComment = (time: string) => {
    const [year, rest] = time.split("T");
    const exactTime = rest.split(".")[0];
    return `${year}, ${exactTime}`;
};
