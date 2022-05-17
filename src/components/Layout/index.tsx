type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
