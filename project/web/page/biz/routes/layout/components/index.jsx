import React from 'react'
import { hashHistory, Link } from 'react-router'
import { Row, Col, Input } from 'antd';
const Search = Input.Search;
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticeList: [],
            activityList: [],
            fundList: {
                debts: [],
                stock: [],
                purchase: []
            },
            projectList: {
                debts: [],
                stock: [],
                transfer: []
            },
            delegateFund: [],
            delegateProject: [],
            activeTab: 'project',
            delegateTab: 'fund'
        };
        ['searchKeyWord', 'switchTab', 'delegateSwitchTab'].forEach(m=>this[m] = this[m].bind(this))
    }

    componentWillMount() {
        let that = this;
        webBizAjax({
            url: "/home/getAllInfo",
            callback(data) {
                that.setState({
                    noticeList: data.noticeInfo,
                    activityList: data.activityInfo,
                    fundList: data.fundList,
                    projectList: data.projectList,
                    delegateFund: data.delegateFund,
                    delegateProject: data.delegateProject
                })
            }
        })
    }

    switchTab(e) {
        if(!e.target.className.match("tabSwitch")) {
            this.setState({
                activeTab: e.target.getAttribute("tabIndex")
            });
        }
    }

    delegateSwitchTab(e) {
        if(!e.target.className.match("switchTab")) {
            this.setState({
                delegateTab: e.target.getAttribute("tabIndex")
            });
        }
    }

    searchKeyWord(value) {
        hashHistory.push(`/${this.state.activeTab}/list?keyWord=${value}`)
    }

    categoryText(type) {
        switch(type) {
            case "1":
                return "债权";
            case "2":
                return "股权";
            case "3":
                return "资产收购";
            case "4":
                return"资产转让";
        }
    }
    render() {
        const bannerImg = require("web-biz-imgs/index/banner.png");
        return (
            <div className="indexPage">
                <div className="banner">
                    <a href="javascript:;">
                        <img src={bannerImg} />
                    </a>
                </div>
                <div className="searchFrame">
                    <Row className="content">
                        <Row className="tabSwitch" onClick={this.switchTab}>
                            <Col span={2} tabIndex="project" className={this.state.activeTab == 'project' ? 'active tab' : 'tab'}>项目</Col>
                            <Col span={2} tabIndex="fund" className={this.state.activeTab == 'fund' ? 'active tab' : 'tab'}>资金</Col>
                        </Row>
                        <Row className="searchInput">
                            <Search placeholder="输入搜索关键字" onSearch={this.searchKeyWord} size="large" />
                        </Row>
                    </Row>
                </div>
                <div className="pAndF">
                    <Row className="fundTitle">
                        <Col span={2} className="title">最新资金</Col>
                    </Row>
                    <Row gutter={16} className="newFund">
                        <Col span={8} className="debts">
                            <Row className="bg"></Row>
                            <Row className="debtsFundList">
                                {this.state.fundList.debts.map(item =>
                                    <Row key={item.id} className="line">
                                        <Col span={15} className="title" offset={1}><Link to={`/fund/detail/${item.id}?type=normal`}>{item.title}</Link></Col>
                                        <Col span={8} className="date">{item.date}</Col>
                                    </Row>
                                )}
                            </Row>
                            <Row className="more">
                                <Link to={`/fund/list/debts?type=normal`}>更多&gt;&gt;</Link>
                            </Row>
                        </Col>
                        <Col span={8} className="stock">
                            <Row className="bg"></Row>
                            <Row className="stockFundList">
                                {this.state.fundList.stock.map(item =>
                                    <Row key={item.id} className="line">
                                        <Col span={15} className="title" offset={1}><Link to={`/fund/detail/${item.id}?type=normal`}>{item.title}</Link></Col>
                                        <Col span={8} className="date">{item.date}</Col>
                                    </Row>
                                )}
                            </Row>
                            <Row className="more">
                                <Link to={`/fund/list/stock?type=normal`}>更多&gt;&gt;</Link>
                            </Row>
                        </Col>
                        <Col span={8} className="purchase">
                            <Row className="bg"></Row>
                            <Row className="purchaseFundList">
                                {this.state.fundList.purchase.map(item =>
                                    <Row key={item.id} className="line">
                                        <Col span={15} className="title" offset={1}><Link to={`/fund/detail/${item.id}?type=normal`}>{item.title}</Link></Col>
                                        <Col span={8} className="date">{item.date}</Col>
                                    </Row>
                                )}
                            </Row>
                            <Row className="more">
                                <Link to={`/fund/list/purchase?type=normal`}>更多&gt;&gt;</Link>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="projectTitle">
                        <Col span={2} className="title">最新项目</Col>
                    </Row>
                    <Row gutter={16} className="newProject">
                        <Col span={8} className="debts">
                            <Row className="bg"></Row>
                            <Row className="debtsProjectList">
                                {this.state.projectList.debts.map(item =>
                                    <Row key={item.id} className="line">
                                        <Col span={15} className="title" offset={1}><Link to={`/project/detail/${item.id}?type=normal`}>{item.title}</Link></Col>
                                        <Col span={8} className="date">{item.date}</Col>
                                    </Row>
                                )}
                            </Row>
                            <Row className="more">
                                <Link to={`/project/list/debts?type=normal`}>更多&gt;&gt;</Link>
                            </Row>
                        </Col>
                        <Col span={8} className="stock">
                            <Row className="bg"></Row>
                            <Row className="stockProjectList">
                                {this.state.projectList.stock.map(item =>
                                    <Row key={item.id} className="line">
                                        <Col span={15} className="title" offset={1}><Link to={`/project/detail/${item.id}?type=normal`}>{item.title}</Link></Col>
                                        <Col span={8} className="date">{item.date}</Col>
                                    </Row>
                                )}
                            </Row>
                            <Row className="more">
                                <Link to={`/project/list/stock?type=normal`}>更多&gt;&gt;</Link>
                            </Row>
                        </Col>
                        <Col span={8} className="transfer">
                            <Row className="bg"></Row>
                            <Row className="transferProjectList">
                                {this.state.projectList.transfer.map(item =>
                                    <Row key={item.id} className="line">
                                        <Col span={15} className="title" offset={1}><Link to={`/project/detail/${item.id}?type=normal`}>{item.title}</Link></Col>
                                        <Col span={8} className="date">{item.date}</Col>
                                    </Row>
                                )}
                            </Row>
                            <Row className="more">
                                <Link to={`/project/list/transfer?type=normal`}>更多&gt;&gt;</Link>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="delegate">
                    <Row className="switchTab" onClick={this.delegateSwitchTab}>
                        <Col span={2} tabIndex="fund" className={this.state.delegateTab == 'fund' ? 'active tab' : 'tab'}>委托资金</Col>
                        <Col span={2} tabIndex="project" className={this.state.delegateTab == 'project' ? 'active tab' : 'tab'}>委托项目</Col>
                    </Row>
                    {this.state.delegateTab == "fund" ?
                        <Row className="contentFrame">
                            {this.state.delegateFund.map(item =>
                                <Row key={item.id} className="itemDetail">
                                    <Row>
                                        {item.title}
                                        <span className={item.status==1 ? "status progress content" : "status content"}>{item.status == 1 ? "进行中" : "已结束"}</span>
                                    </Row>
                                    <Row>
                                        <Col span={5}>
                                            <Row>
                                                投资类别:<span className="redText content">{this.categoryText(item.category)}</span>
                                            </Row>
                                            <Row>
                                                投资地区:<span className="content">{item.region.join(',')}</span>
                                            </Row>
                                        </Col>
                                        <Col span={7}>
                                            <Row>
                                                投资类型:<span className="redText content">{item.type.join(",")}</span>
                                            </Row>
                                            <Row>
                                                单笔投资区间:<span className="redText content">{item.investMin}万元~{item.investMax}万元</span>
                                            </Row>
                                        </Col>
                                        <Col span={7}>
                                            <Row>
                                                投资行业:<span className="content">{item.industry.join(",")}</span>
                                            </Row>
                                            <Row>
                                                已查看人数:<span className="content">{item.seen}人</span>
                                            </Row>
                                        </Col>
                                        <Col span={5}>
                                            <Link className="goToDetail" to={`/fund/detail/${item.id}?type=delegate`}>了解详情</Link>
                                        </Col>
                                    </Row>
                                </Row>
                            )}
                        </Row> :
                        <Row className="contentFrame">
                            {this.state.delegateProject.map(item =>
                                <Row key={item.id} className="itemDetail">
                                    <Row>
                                        {item.title}
                                        <span className={item.status==1 ? "status progress content" : "status content"}>{item.status == 1 ? "进行中" : "已结束"}</span>
                                    </Row>
                                    <Row>
                                        <Col span={5}>
                                            <Row>
                                                项目类别:<span className="redText content">{this.categoryText(item.category)}</span>
                                            </Row>
                                            <Row>
                                                所在地区:<span className="content">{item.region}</span>
                                            </Row>
                                        </Col>
                                        <Col span={7}>
                                            <Row>
                                                项目类型:<span className="redText content">{item.type}</span>
                                            </Row>
                                            <Row>
                                                融资额度:<span className="redText content">{item.financingNum}万元</span>
                                            </Row>
                                        </Col>
                                        <Col span={7}>
                                            <Row>
                                                所属行业:<span className="content">{item.industry}</span>
                                            </Row>
                                            <Row>
                                                已查看人数:<span className="content">{item.seen}人</span>
                                            </Row>
                                        </Col>
                                        <Col span={5}>
                                            <Link className="goToDetail" to={`/project/detail/${item.id}?type=delegate`}>了解详情</Link>
                                        </Col>
                                    </Row>
                                </Row>
                            )}
                        </Row>
                    }
                </div>
                <div className="nAndA">
                    <Row className="noticeTitle">
                        <Col span={20} className="noticeIcon">公告</Col>
                        <Col span={4} className="more">
                            <Link to="/notice">更多&gt;&gt;</Link>
                        </Col>
                    </Row>
                    <div className="noticeList">
                        {this.state.noticeList.map(item =>
                            <Row key={Math.random()} className="noticeDetail">
                                <Col span={18}>[公告]&nbsp;&nbsp;<Link to={`/notice/detail/${item.id}`}>{item.text}</Link></Col>
                                <Col span={6} className="date">{item.date}</Col>
                            </Row>
                        )}
                    </div>
                    <Row className="activityTitle">
                        <Col span={20} className="activityIcon">活动</Col>
                        <Col span={4} className="more">
                            <Link to="/activity">更多&gt;&gt;</Link>
                        </Col>
                    </Row>
                    <div className="activityList">
                        {this.state.activityList.map(item =>
                            <Row key={Math.random()} className="activityDetail">
                                <Col span={18}>[活动]&nbsp;&nbsp;<Link to={`/activity/detail/${item.id}`}>{item.text}</Link></Col>
                                <Col span={6} className="date">{item.date}</Col>
                            </Row>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Index;