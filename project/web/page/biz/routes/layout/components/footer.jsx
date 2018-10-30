import React,{Component} from 'react'
import {hashHistory, Link } from 'react-router'
import { Row, Col, Layout, Button, Modal, Popconfirm } from 'antd';
const { Footer } = Layout;

class bizFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            SEOLink: []
        };
        //['showModal', 'handleSave', 'hideModal', 'logout'].forEach(m=>this[m] = this[m].bind(this))
    }

    componentWillMount() {
        let that = this;
        webBizAjax({
            url: "/common/getSEOLink",
            callback(data) {
                that.setState({ SEOLink: data.SEOLink })
            }
        })
    }

    render() {
        const appImg = require("web-biz-imgs/appDownload.png");
        return (
            <Footer className="footer">
                <div className="outerLinkFrame">
                    <Row className="outerLink">
                        {this.state.SEOLink.length > 0 ?
                            <Col span={4}>
                                <div className="link">友情链接</div>
                                <ul>
                                    {this.state.SEOLink.map((item, index) => 
                                        <li key={index}><a href={item.link}>{item.value}</a></li>
                                    )}
                                </ul>
                            </Col> : ""
                        }
                        <Col span={4}>
                            <div className="about">关于我们</div>
                            <ul>
                                <li><Link to="/about/overview">公司概况</Link></li>
                                <li><Link to="/about/news">行业动态</Link></li>
                                <li><Link to="/about/report">媒体报到</Link></li>
                                <li><Link to="/about/contact">联系我们</Link></li>
                            </ul>
                        </Col>
                        <Col span={4}>
                            <div className="help">帮助中心</div>
                            <ul>
                                <li><Link to="/help/qa">常见问题</Link></li>
                                <li><Link to="help/feedback">意见反馈</Link></li>
                            </ul>
                        </Col>
                        <Col span={7} offset={5}>
                            <Col span={7}>
                                <img src={appImg} className="appImg" />
                            </Col>
                            <Col span={15} offset={2}>
                                <p>客服电话:</p>
                                <p>4008-333-888</p>
                                <p>总机电话:021-20265188</p>
                                <p>传真:021-58903578</p>
                            </Col>
                        </Col>
                    </Row>
                </div>
                <Row className="info">
                    <Col span={10} offset={4}>
                        上海浦东新区浦电路360号 陆家嘴投资大厦15楼
                    </Col>
                    <Col span={10}>
                        copyright&copy; 上海春雨金融信息服务有限公司  沪ICP备11045933号-6
                    </Col>
                </Row>
            </Footer>
        )
    }
}

module.exports = bizFooter;