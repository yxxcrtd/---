package com.caimao.gjs.api.entity.req;

import com.caimao.bana.common.api.entity.QueryBase;
import com.caimao.gjs.api.entity.res.FQueryEntrustRes;
import com.caimao.gjs.api.entity.res.FQueryHistoryEntrustRes;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

/**
 * 历史委托
 */
public class FQueryHistoryEntrustReq extends QueryBase<FQueryHistoryEntrustRes> implements Serializable {
    /**用户编号*/
    @NotNull(message = "用户编号不能为空")
    private Long userId;
    /**交易所代码*/
    @NotEmpty(message = "交易所代码不能为空")
    private String exchange;
    /**开始日期*/
    private String startDate;
    /**结束日期*/
    private String endDate;
    /**交易员编号*/
    private String traderId;
    /**今日委托*/
    private List<FQueryEntrustRes> todayData;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getExchange() {
        return exchange;
    }

    public void setExchange(String exchange) {
        this.exchange = exchange;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getTraderId() {
        return traderId;
    }

    public void setTraderId(String traderId) {
        this.traderId = traderId;
    }

    public List<FQueryEntrustRes> getTodayData() {
        return todayData;
    }

    public void setTodayData(List<FQueryEntrustRes> todayData) {
        this.todayData = todayData;
    }
}