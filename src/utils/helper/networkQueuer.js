class NetworkQueuer {
  constructor(onFinish) {
    this.queue = [];
    this.isResolving = false;
    this.callback = onFinish;
  }

  addRequest = (req, onSuccess, onFailure) => {
    this.queue.push({ req, onSuccess, onFailure });
    if (this.isResolving) return;
    this.run();
  };

  addCallbackMethod = (callback) => {
    this.callback = callback;
  };

  run = async () => {
    if (!this.canRunNext()) {
      this.isResolving = false;
      this.callback();
      return;
    }

    this.isResolving = true;
    const { req, onSuccess, onFailure } = this.queue.shift();

    try {
      const res = await req;
      onSuccess(res);
    } catch (e) {
      onFailure(e);
    }

    this.run();
  };
  canRunNext = () => {
    return this.queue.length > 0;
  };
}

export { NetworkQueuer };
