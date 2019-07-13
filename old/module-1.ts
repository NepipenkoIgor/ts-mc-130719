/// <reference lib="esnext" />

function sleep(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(2000);
        yield item;
    }
}

export async function speakLikeSloth1(items: string[]): Promise<void> {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}

