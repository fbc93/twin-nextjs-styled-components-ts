type Children = {
  children: React.ReactNode;
}

export default function Container({ children }: Children) {
  return (
    <>
      <header>HEADER</header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  )
}