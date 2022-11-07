import { HeightControlBox } from "components/container/HeightControlBox"
import Layout from "components/Layout"
import { RefundAccountRegistrationBox } from "components/popup/refund_account_registration"

export default function View(){
    return (
        <Layout>
            {/* <HeightControlBox/> */}
            <RefundAccountRegistrationBox/>
        </Layout>
    )
}