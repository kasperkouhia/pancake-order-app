function Page({ title, children }) {
  return (
    <>
      <title>{title + " - pancake-order-app"}</title>
      <div className="m-2 flex h-screen justify-center">
        <div className="m-auto max-w-380 grow">
          <header className="mx-2 my-8">
            <h1 className="text-5xl font-thin uppercase">{title}</h1>
          </header>
          <main>{children}</main>
          <footer className="m-2 text-center">
            <span>&copy; 2025 &middot; Kasper Kouhia</span>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Page;
