const delay = (ms = 3000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
}

const majustuce = (params) => {
    return '';
}

export {delay, majustuce}