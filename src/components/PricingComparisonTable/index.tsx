import React from 'react'
import { Row, Col, Button } from 'antd'
import imgCloud from '../../images/cloud.svg'
import imgBuilding from '../../images/building.svg'
import imgOpenSource from '../../images/plan-open-source.svg'
import imgEnterprise2 from '../../images/plan-enterprise2.svg'

export const PricingComparisonTable = () => {
    return (
        <Row type="flex" gutter={[24, 24]} style={{ paddingLeft: '16px' }}>
            <table>
                <tr>
                    <th>
                        <img src={imgCloud} alt="" style={{ paddingRight: 0 }} />
                        Cloud
                    </th>
                    <th>
                        <img src={imgEnterprise2} alt="" width="50px" />
                        VPC
                    </th>
                    <th>
                        <img src={imgOpenSource} alt="" width="50px" />
                        Open Source
                    </th>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <strong>Deployment</strong>
                    </td>
                </tr>
                <tr>
                    <td>On PostHog's infrastructure</td>
                    <td>On your infrastructure</td>
                    <td>On your infrastructure</td>
                </tr>
                <tr>
                    <td>Constant price</td>
                    <td>Cheaper at scale</td>
                    <td>Free but doesn't scale</td>
                </tr>
                <tr>
                    <td>Scales to millions+ of users</td>
                    <td>Scales to millions+ of users</td>
                    <td>Scales to a few thousand users</td>
                </tr>
                <tr>
                    <td>Managed by PostHog</td>
                    <td>Managed by PostHog</td>
                    <td>Managed by you</td>
                </tr>
                <tr>
                    <td>Instant to deploy</td>
                    <td>1-3 days to deploy</td>
                    <td>Instant to deploy</td>
                </tr>

                <tr>
                    <td>User data leaves your infrastructure</td>
                    <td>No user data leaves your infrastructure</td>
                    <td>No user data leaves your infrastructure</td>
                </tr>

                <tr>
                    <td colSpan={3}>
                        <strong>Building on PostHog</strong>
                    </td>
                </tr>
                <tr>
                    <td>10+ SDKs for event capture</td>
                    <td>10+ SDKs for event capture</td>
                    <td>10+ SDKs for event capture</td>
                </tr>
                <tr>
                    <td>Plugins</td>
                    <td>Plugins</td>
                    <td>Plugins</td>
                </tr>
                <tr>
                    <td>Data lake export</td>
                    <td>Data lake export</td>
                    <td>Data lake export</td>
                </tr>
                <tr>
                    <td>CSV export</td>
                    <td>CSV export</td>
                    <td>CSV export</td>
                </tr>
                <tr>
                    <td>API access</td>
                    <td>Database and API access</td>
                    <td>Database and API access</td>
                </tr>

                <tr>
                    <td colSpan={3}>
                        <strong>Features</strong>
                    </td>
                </tr>
                <tr>
                    <td>Event data pipeline</td>
                    <td>Event data pipeline</td>
                    <td>Event data pipeline</td>
                </tr>
                <tr>
                    <td>Event autocapture</td>
                    <td>Event autocapture</td>
                    <td>Event autocapture</td>
                </tr>
                <tr>
                    <td>Trends</td>
                    <td>Trends</td>
                    <td>Trends</td>
                </tr>
                <tr>
                    <td>Funnels</td>
                    <td>Funnels</td>
                    <td>Funnels</td>
                </tr>
                <tr>
                    <td>Retention</td>
                    <td>Retention</td>
                    <td>Retention</td>
                </tr>
                <tr>
                    <td>Session recording</td>
                    <td>Session recording</td>
                    <td>Session recording</td>
                </tr>
                <tr>
                    <td>7 year data retention</td>
                    <td>Custom data retention</td>
                    <td>Custom data retention</td>
                </tr>

                <tr>
                    <td colSpan={3}>
                        <strong>Your team</strong>
                    </td>
                </tr>
                <tr>
                    <td>Unlimited users</td>
                    <td>Unlimited users</td>
                    <td>Unlimited users</td>
                </tr>
                <tr>
                    <td>User permissioning</td>
                    <td>User permissioning</td>
                    <td>No user permissioning</td>
                </tr>
                <tr>
                    <td>Limited SSO</td>
                    <td>SSO</td>
                    <td>No SSO</td>
                </tr>

                <tr>
                    <td colSpan={3}>
                        <strong>Support</strong>
                    </td>
                </tr>
                <tr>
                    <td>Dedicated Slack Channel</td>
                    <td>Dedicated Slack Channel</td>
                    <td>Community Slack</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>Email</td>
                    <td>No email support</td>
                </tr>
                <tr>
                    <td>Account Manager</td>
                    <td>Account Manager</td>
                    <td>No account management</td>
                </tr>
            </table>
            <Col md={12} sm={24}>
                <div className="p-full-height">
                    <h4 className="p-text-primary p-title-with-icon">
                        <img src={imgCloud} alt="" style={{ paddingRight: 0 }} />
                        Cloud
                    </h4>
                    <ul className="p-comparison-list">
                        <li>Immediate start</li>
                        <li>
                            Recommended if you want to get started <b>right now</b>. Start capturing events in under 5
                            minutes.
                        </li>
                        <li>
                            You don’t own or want to own your own technical infrastructure.
                            <b> We’ll handle everything for you.</b>
                        </li>
                        <li>You want an out-of-the-box secure solution.</li>
                        <li>You want to get automatic updates with all the latest features.</li>
                    </ul>
                    <div className="p-comparison-btn">
                        <a href="https://app.posthog.com/signup">
                            <Button type="primary" size="large">
                                Start free
                            </Button>
                        </a>
                    </div>
                </div>
            </Col>
            <Col md={12} sm={24}>
                <div className="p-full-height">
                    <h4 className="p-text-primary p-title-with-icon">
                        <img src={imgBuilding} alt="" /> VPC
                    </h4>
                    <ul className="p-comparison-list">
                        <li>Recommended if you have large volumes of events or users ({'>10k monthly users'}).</li>
                        <li>You don't want user data to leave your infrastructure (e.g. HIPAA, SOC2).</li>
                        <li>You need full access to the production instance.</li>
                        <li>
                            You are concerned with browser privacy features, ad blockers, or third-party cookie
                            blockers.
                        </li>
                    </ul>
                    <div className="p-comparison-btn">
                        <Button type="primary" size="large" href="mailto:sales@posthog.com?title=Start vpc deployment">
                            Contact sales
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}