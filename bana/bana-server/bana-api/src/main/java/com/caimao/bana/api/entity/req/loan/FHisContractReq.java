/*
 * Huobi.com Inc.
 *Copyright (c) 2014 火币天下网络技术有限公司. All Rights Reserved
 */
package com.caimao.bana.api.entity.req.loan;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import org.apache.commons.lang.StringUtils;

import com.caimao.bana.api.entity.QueryBase;
import com.caimao.bana.api.entity.res.loan.FHisContractRes;


/**
 * @author zxd $Id$
 * 
 */
public class FHisContractReq extends QueryBase<FHisContractRes> implements Serializable{

    private static final long serialVersionUID = 7352095428241918035L;
    @NotNull(message = "用户编号不能为空")
    private Long userId;
    private Long contractNo;
    private Long prodId;
    private String contractType;
    private String signDatetimeBegin;
    private String signDatetimeEnd;
    private String prodTypeId;

    public Long getUserId() {
        return this.userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getContractNo() {
        return this.contractNo;
    }

    public void setContractNo(Long contractNo) {
        this.contractNo = contractNo;
    }

    public Long getProdId() {
        return this.prodId;
    }

    public void setProdId(Long prodId) {
        this.prodId = prodId;
    }

    public String getContractType() {
        return this.contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getSignDatetimeBegin() {
        return this.signDatetimeBegin;
    }

    public void setSignDatetimeBegin(String signDatetimeBegin) {
        if (StringUtils.isNotEmpty(signDatetimeBegin)) {
            signDatetimeBegin = signDatetimeBegin + " 00:00:00";
        }
        this.signDatetimeBegin = signDatetimeBegin;
    }

    public String getSignDatetimeEnd() {
        return this.signDatetimeEnd;
    }

    public void setSignDatetimeEnd(String signDatetimeEnd) {
        if (StringUtils.isNotEmpty(signDatetimeEnd)) {
            signDatetimeEnd = signDatetimeEnd + " 23:59:59";
        }
        this.signDatetimeEnd = signDatetimeEnd;
    }

    public String getDefaultOrderColumn() {
        return "a.contract_no";
    }

    public String getProdTypeId() {
        return this.prodTypeId;
    }

    public void setProdTypeId(String prodTypeId) {
        this.prodTypeId = prodTypeId;
    }
}

