package com.caimao.gjs.server.trade.protocol.njs.entity.req;

import java.io.Serializable;

public class FNJSQueryMatchHistoryReq implements Serializable{
    private String TOKEN; //用户索引
    private String TRADERID; //交易商编号
    private String HDATE; //日期

    public String getTOKEN() {
        return TOKEN;
    }

    public void setTOKEN(String TOKEN) {
        this.TOKEN = TOKEN;
    }

    public String getTRADERID() {
        return TRADERID;
    }

    public void setTRADERID(String TRADERID) {
        this.TRADERID = TRADERID;
    }

    public String getHDATE() {
        return HDATE;
    }

    public void setHDATE(String HDATE) {
        this.HDATE = HDATE;
    }
}
