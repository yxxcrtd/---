package com.hsnet.pz.controller;

import com.caimao.bana.api.service.IHomsAccountService;
import com.hsnet.pz.ao.stock.IStockAO;
import com.hsnet.pz.biz.homs.dto.req.F830310Req;
import com.hsnet.pz.biz.homs.dto.req.F830311Req;
import com.hsnet.pz.biz.homs.dto.res.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

//@Controller
//@RequestMapping(value = "/stock")
public class StockController extends BaseController {

    @Resource
    private IHomsAccountService homsAccountService;

    @Autowired
    private IStockAO stockAO;

    // *************交易登录 start*****************************
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public String doHomsLogin(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("operator_pwd") String operatorPwd) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.doHomsLogin(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId, operatorPwd);

    }

    // *************交易登录 end*******************************

    // *************买入 start*******************************

    @RequestMapping(value = "/buylimit", method = RequestMethod.POST)
    @ResponseBody
    public boolean judgeBuylimit(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("stock_code") String stockCode) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        stockAO.judgeBuylimit(homsFundAccount, homsCombineId, stockCode);
        return true;
    }

    @RequestMapping(value = "/buyquantity", method = RequestMethod.POST)
    @ResponseBody
    public F830303Res getBuyQuantity(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("stock_code") String stockCode,
            @RequestParam("exchange_type") String exchangeType,
            @RequestParam("entrust_price") Double entrustPrice) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.getBuyQuantity(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId, stockCode, exchangeType,
            entrustPrice);
    }

    @RequestMapping(value = "/buy", method = RequestMethod.POST)
    @ResponseBody
    public F830304Res buy(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("stock_code") String stockCode,
            @RequestParam("exchange_type") String exchangeType,
            @RequestParam("entrust_price") Double entrustPrice,
            @RequestParam("entrust_quantity") Long entrustQuantity,
            @RequestParam("trade_pwd") String tradePwd) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.buy(this.getSessionUser().getUser_id(), homsFundAccount,
            homsCombineId, exchangeType, stockCode, entrustPrice,
            entrustQuantity, tradePwd);

    }

    // *************买入 end*******************************
    // *************卖出 start*******************************

    @RequestMapping(value = "/sellquantity", method = RequestMethod.POST)
    @ResponseBody
    public double getSellQuantity(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("stock_code") String stockCode,
            @RequestParam("exchange_type") String exchangeType) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.getSellQuantity(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId, stockCode, exchangeType);

    }

    @RequestMapping(value = "/sell", method = RequestMethod.POST)
    @ResponseBody
    public F830304Res sell(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("stock_code") String stockCode,
            @RequestParam("exchange_type") String exchangeType,
            @RequestParam("entrust_price") Double entrustPrice,
            @RequestParam("entrust_quantity") Long entrustQuantity,
            @RequestParam("trade_pwd") String tradePwd) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.sell(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId, exchangeType, stockCode,
            entrustPrice, entrustQuantity, tradePwd);

    }

    // *************卖出 end*******************************
    // *************撤单 start*******************************
    @RequestMapping(value = "/revocableentrust", method = RequestMethod.GET)
    @ResponseBody
    public List<F830307Res> queryRevocableEntrust(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.queryRevocableEntrust(
            this.getSessionUser().getUser_id(), homsFundAccount, homsCombineId);
    }

    @RequestMapping(value = "/withdrawal", method = RequestMethod.POST)
    @ResponseBody
    public boolean withdrawal(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("entrust_no") String entrustNo) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.withdrawal(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId, entrustNo);
    }

    // *************撤单 end*******************************

    // *************委托查询 start*******************************

    @RequestMapping(value = "father/curentrust", method = RequestMethod.GET)
    @ResponseBody
    public List<F830307Res> queryFatherCurEntrust(
            @RequestParam("homs_fund_account") String homsFundAccount) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), null, homsFundAccount);

        return stockAO.queryFatherCurEntrust(
            this.getSessionUser().getUser_id(), homsFundAccount);

    }
    
    /*
     * 不用登录查询当日委托
     */
    @RequestMapping(value = "/curentrust", method = RequestMethod.GET)
    @ResponseBody
    public List<F830307Res> queryCurEntrust(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId,
            @RequestParam("userId") Long userId) {

        return stockAO.queryChildCurEntrust(userId,
            homsFundAccount, homsCombineId);

    }

    @RequestMapping(value = "child/curentrust", method = RequestMethod.GET)
    @ResponseBody
    public List<F830307Res> queryChildCurEntrust(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.queryChildCurEntrust(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId);

    }

    @RequestMapping(value = "father/hisentrust", method = RequestMethod.GET)
    @ResponseBody
    public F830310Req queryFatherHisEntrust(
            @RequestParam("start_date") String startDate,
            @RequestParam("end_date") String endDate,
            @RequestParam("start") int start, @RequestParam("limit") int limit) {
        return stockAO.queryHisEntrust(this.getSessionUser().getUser_id(),
            startDate, endDate, start, limit);
    }

    @RequestMapping(value = "child/hisentrust", method = RequestMethod.GET)
    @ResponseBody
    public F830310Req queryChildHisEntrust(
            @RequestParam("start_date") String startDate,
            @RequestParam("end_date") String endDate,
            @RequestParam("start") int start, @RequestParam("limit") int limit) {
        return stockAO.queryHisEntrust(this.getSessionUser().getUser_id(),
            startDate, endDate, start, limit);
    }

    // *************委托查询 end*******************************
    // *************成交查询 start*******************************

    @RequestMapping(value = "father/curdeal", method = RequestMethod.GET)
    @ResponseBody
    public List<F830308Res> queryFatherCurDeal(
            @RequestParam("homs_fund_account") String homsFundAccount) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), null, homsFundAccount);

        return stockAO.queryFatherCurDeal(this.getSessionUser().getUser_id(),
            homsFundAccount);
    }

    @RequestMapping(value = "child/curdeal", method = RequestMethod.GET)
    @ResponseBody
    public List<F830308Res> queryChildCurDeal(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.queryChildCurDeal(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId);
    }

    @RequestMapping(value = "father/hisdeal", method = RequestMethod.GET)
    @ResponseBody
    public F830311Req queryFatherHisDeal(
            @RequestParam("start_date") String startDate,
            @RequestParam("end_date") String endDate,
            @RequestParam("start") int start, @RequestParam("limit") int limit) {
        return stockAO.queryHisRealdeal(this.getSessionUser().getUser_id(),
            startDate, endDate, start, limit);

    }

    @RequestMapping(value = "child/hisdeal", method = RequestMethod.GET)
    @ResponseBody
    public F830311Req queryChildHisDeal(
            @RequestParam("start_date") String startDate,
            @RequestParam("end_date") String endDate,
            @RequestParam("start") int start, @RequestParam("limit") int limit) {
        return stockAO.queryHisRealdeal(this.getSessionUser().getUser_id(),
            startDate, endDate, start, limit);

    }

    // *************成交查询 end*******************************
    // *************持仓查询 start*******************************
    @RequestMapping(value = "/father/holding", method = RequestMethod.GET)
    @ResponseBody
    public List<F830309Res> queryFatherHolding(
            @RequestParam("homs_fund_account") String homsFundAccount) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), null, homsFundAccount);

        return stockAO.queryFatherHolding(this.getSessionUser().getUser_id(),
            homsFundAccount);
    }

    @RequestMapping(value = "/child/holding", method = RequestMethod.GET)
    @ResponseBody
    public List<F830309Res> queryChildHolding(
            @RequestParam("homs_fund_account") String homsFundAccount,
            @RequestParam("homs_combine_id") String homsCombineId) throws Exception {

        // 进行账户验证，验证homs账户所属用户是否是指定的USER_ID
        this.homsAccountService.valideUserHomsAccount(this.getSessionUser().getUser_id(), homsCombineId, homsFundAccount);

        return stockAO.queryChildHolding(this.getSessionUser().getUser_id(),
            homsFundAccount, homsCombineId);
    }

    // *************持仓查询 end*******************************
}
