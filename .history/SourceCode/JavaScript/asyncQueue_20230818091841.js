/* 实现一个异步任务队列 */
class AsyncQueue {
    constructor() {
        // 任务队列
        this.queue = [];
        // 当前是否有任务正在执行
        this.running = false;
    }

    push(fun) {
        return new Promise((reject, resolve) => {
            // 封装fun, 并将其放入任务队列列
            this.queue.push(async () => {
                this.running = true;
                try {
                    let res = await fun();
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
                this.running = false;

                // 任务执行完成，取出新任务进行执行
                // ?.为可选链操作，如果里面没有元素，则不会执行后面的方法
                this.queue.shift()?.();
            });

            // 没有任务正在执行，取出新任务进行执行
            if (!this.running) {
                this.queue.shift()?.();
            }
        });
    }
}
