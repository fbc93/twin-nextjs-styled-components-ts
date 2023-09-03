import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

type Children = {
  children: React.ReactNode;
}

export default function Container({ children }: Children) {
  return (
    <div id="wrap">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}