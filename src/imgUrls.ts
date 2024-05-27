const imgUrls: { [key: string]: string } = import.meta.glob(
    ["/images/*.svg", "!/images/bg-*", "!/images/icon-remove.svg"],
    {
      query: "?url",
      import: "default",
      eager: true,
    }
  );
export default imgUrls;