import { Body, Container, Head, Heading, Html, Preview, Tailwind } from "@react-email/components"
import { OrderInformation } from "./components/OrderInformation"

type TPurchaseReceiptEmail = {
    product: {
        name: string
        imagePath: string
        description: string
    }
    order: { 
        id: string;
        createdAt: Date;
        pricePaidInCents: number;
    }
    downloadVerificationId: string
}

PurchaseReceiptEmail.PreviewProps = {
    product: { 
        name: "Product Name",
        description: "Description product", 
        imagePath: "/products/1b91c7c2-5374-43f3-a566-83d8992e9295-andes_rubia_lata-removebg.png" },
    order: {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        pricePaidInCents: 10000,
    },
    downloadVerificationId: crypto.randomUUID(),
} satisfies TPurchaseReceiptEmail

export default function PurchaseReceiptEmail({ product, order, downloadVerificationId }: TPurchaseReceiptEmail) {
    return (
        <Html>
            <Preview>Download {product.name} and view receipt</Preview>
            <Tailwind>
                <Head />
                <Body className="font-sans bg-white">
                    <Container className="max-w-xl">
                        <h1>Purchase Receipt</h1>
                        <OrderInformation order={order} product={product} downloadVerificationId={downloadVerificationId}/>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}