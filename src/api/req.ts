class Request {
  private BASEURL: string;

  constructor(url: string) {
    this.BASEURL = url;
  }

  public async get(url: string) {
    try {
      const response = await fetch(`${this.BASEURL}${url}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const parsedData = await response.json();
      return parsedData;
    } catch (error) {
      return error;
    }
  }

  public async post(
    url: string,
    {
      body,
    }: {
      body: Record<string, unknown> | null;
    }
  ) {
    try {
      const response = await fetch(`${this.BASEURL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const parsedData = await response.json();
      return parsedData;
    } catch (error) {
      return error;
    }
  }
}
export { Request };
