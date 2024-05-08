import { Body, Container, Head, Heading, Hr, Html, Preview, Tailwind } from "@react-email/components"
import { OrderInformation } from "./components/OrderInformation"
import React from "react"

type TOrderHistoryEmail = {
    orders: {
        id: string
        pricePaidInCents: number
        createdAt: Date
        downloadVerificationId: string
        product: {
            name: string
            imagePath: string
            description: string
        }        
    }[]
}

OrderHistoryEmail.PreviewProps = {
    orders: [
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 10000,
            downloadVerificationId: crypto.randomUUID(),
            product: { 
                name: "Product Name",
                description: "Description product", 
                imagePath: "/products/1b91c7c2-5374-43f3-a566-83d8992e9295-andes_rubia_lata-removebg.png" },
        },
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 2000,
            downloadVerificationId: crypto.randomUUID(),
            product: { 
                name: "Product Name 2",
                description: "Description product 2", 
                imagePath: "/products/7d1cb8d8-4314-45a7-9d15-d9d156cfc59f-speed_473.png" },
        }
    ]
} satisfies TOrderHistoryEmail

export default function OrderHistoryEmail({ orders }: TOrderHistoryEmail) {
    return (
        <Html>
            <Preview>Order History and Downloads</Preview>
            <Tailwind>
                <Head />
                <Body className="font-sans bg-white">
                    <Container className="max-w-xl">
                        <h1>Order History</h1>
                        {orders.map((order, index) => (
                            <React.Fragment key={order.id}>
                                <OrderInformation 
                                    key={order.id} 
                                    order={order} 
                                    product={order.product} 
                                    downloadVerificationId={order.downloadVerificationId}
                                />
                                {index < orders.length - 1 && <Hr />}
                            </React.Fragment>
                        ))}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}