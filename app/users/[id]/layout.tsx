'use client'
import { Layout, theme, Typography} from "antd";
import SideBar from "./SideBar";

export default function UserLayout({
    children,
    params, // will be a page or nested layout
   }: {
    children: React.ReactNode
    params: {id:string}
   }) {
    const { Header, Content, Sider } = Layout;
    const {Title} = Typography;
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <Layout style = {{minHeight: "100vh"}}>
            <Sider style = {{backgroundColor: colorBgContainer}}><SideBar id = {params.id}/></Sider>
            <Layout>
                <Header style = {{backgroundColor: colorBgContainer}}><Title>Teaching Service System</Title></Header>
                <Content>{children}</Content>
            </Layout>
        </Layout>
     
    )
}