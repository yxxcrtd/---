<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>财猫后台管理系统</title>
    <jsp:include page="/WEB-INF/jsp/include/tpl_menu_head.jsp"/>
</head>
<body>
<jsp:include page="/WEB-INF/jsp/include/tpl_menu_top.jsp"/>
<div class="body_container">
    <jsp:include page="/WEB-INF/jsp/include/tpl_menu_left.jsp"/>
    <div class="main_content">
        <div class="container">
            <h4 class="heading">用户资金统计</h4>
            <jsp:include page="/WEB-INF/jsp/include/tpl_menu_page.jsp"/>
            <form method="post" class="form-inline" action="/gjs/statistics/money" name="searchForm">
                <input type="hidden" name="currentPage" value="1" id="currentPage">
                <div class="form-group" style="margin-bottom: 5px;">
                    <label>时间：</label>
                    <input type="date" class="form-control input-sm" name="startDate" value="${list.startDate}" placeholder="格式：yyyy-mm-dd"> -
                    <input type="date" class="form-control input-sm" name="endDate" value="${list.endDate}" placeholder="格式：yyyy-mm-dd">
                </div>
                <div class="form-group" style="margin-bottom: 5px;">
                    <label>交易所:</label>
                    <select name="e" class="form-control input-sm" id="exchange">
                        <option value="njs" <c:if test="${'njs' == list.e}">selected="selected"</c:if>>南交所</option>
                        <option value="sjs" <c:if test="${'sjs' == list.e}">selected="selected"</c:if>>上金所</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 5px;">
                    <label>状态:</label>
                    <select name="status1" class="form-control input-sm" id="status">
                        <option value="">全部</option>
                        <option value="1" <c:if test="${1 == list.status1}">selected</c:if>>开户</option>
                        <option value="2" <c:if test="${2 == list.status1}">selected</c:if>>入金</option>
                        <option value="3" <c:if test="${3 == list.status1}">selected</c:if>>出金</option>
                        <option value="4" <c:if test="${4 == list.status1}">selected</c:if>>交易</option>
                        <c:if test="${'' == list.exchange}">
                            <option value="5" <c:if test="${5 == list.status1}">selected</c:if>>注册</option>
                            <option value="6" <c:if test="${6 == list.status1}">selected</c:if>>登录</option>
                            <option value="7" <c:if test="${7 == list.status1}">selected</c:if>>未开户</option>
                        </c:if>
                    </select>
                </div>
                <br />
                <div class="form-group">
                    <label>客户经理编号：</label>
                    <input type="text" class="form-control input-sm" name="refUserId" value="${list.refUserId}" placeholder="支持模糊查询">
                </div>
                <div class="form-group">
                    <label>状态:</label>
                    <select name="status2" class="form-control input-sm">
                        <option value="">全部</option>
                        <option value="1" <c:if test="${1 == list.status2}">selected</c:if>>开户</option>
                        <option value="2" <c:if test="${2 == list.status2}">selected</c:if>>入金</option>
                        <option value="3" <c:if test="${3 == list.status2}">selected</c:if>>出金</option>
                        <option value="4" <c:if test="${4 == list.status2}">selected</c:if>>交易</option>
                        <option value="5" <c:if test="${5 == list.status2}">selected</c:if>>注册</option>
                        <option value="6" <c:if test="${6 == list.status2}">selected</c:if>>登录</option>
                        <option value="7" <c:if test="${7 == list.status2}">selected</c:if>>未开户</option>
                    </select>
                </div>
                <button class="btn btn-sm btn-primary" type="submit">查询</button>
            </form>

            <div style="padding: 15px 0 5px;">共有 <b>${list.totalCount}</b> 条记录</div>
            <div style="padding: 5px 0;">南交所累计入金金额：<b><fmt:formatNumber value="${njsTotalA}" pattern="0.00" /></b>；南交所累计入金次数：<b>${njsCountA}</b>；南交所累计出金金额：<b><fmt:formatNumber value="${njsTotalB}" pattern="0.00" /></b>；南交所累计出金次数：<b>${njsCountB}</b>；南交所累计账户额度：<b><fmt:formatNumber value="${u.njsTotalMoney * 0.00008}" pattern="0.00" /></b></div>
            <div style="padding: 5px 0 15px;">上金所累计入金金额：<b><fmt:formatNumber value="${sjsTotalA}" pattern="0.00" /></b>；上金所累计入金次数：<b>${sjsCountA}</b>；上金所累计出金金额：<b><fmt:formatNumber value="${sjsTotalB}" pattern="0.00" /></b>；上金所累计出金次数：<b>${sjsCountB}</b>；上金所累计账户额度：<b><fmt:formatNumber value="${u.njsTotalMoney * 0.00008}" pattern="0.00" /></b></div>

            <table class="table table-hover table-bordered" style="width: 1000px;">
                <thead>
                <tr>
                    <th style="text-align: center;">选择</th>
                    <th>姓名</th>
                    <th>手机号</th>
                    <th>交易所</th>
                    <th>时间</th>
                    <th>行为</th>
                    <th>金额</th>
                    <th>账户额度</th>
                </tr>
                </thead>
                <c:forEach items="${list.getItems()}" var="u">
                    <tr>
                        <td align="center"><input type="checkbox" name="userId" /></td>
                        <td>${u.userRealName}</td>
                        <td>${u.mobile}</td>
                        <td><c:if test="${'NJS' == u.exchange1}">南交所</c:if><c:if test="${'SJS' == u.exchange1}">上金所</c:if></td>
                        <td>
                            <c:choose>
                                <c:when test="${1 == list.status1}"><fmt:formatDate value="${u.createDatetime}" pattern="yyyy-MM-dd"/></c:when>
                                <c:otherwise>
                                    <c:if test="${not empty u.dealDate}">${fn:substring(u.dealDate, 0, 4)}-${fn:substring(u.dealDate, 4, 6)}-${fn:substring(u.dealDate, 6, 8)}</c:if>
                                </c:otherwise>
                            </c:choose>
                        </td>
                        <td>
                            <c:choose>
                                <c:when test="${'NJS' == u.exchange1}">
                                    <c:if test="${'A' == u.changeType}">入金</c:if>
                                    <c:if test="${'B' == u.changeType}">出金</c:if>
                                    <c:if test="${'C' == u.changeType}">质押</c:if>
                                    <c:if test="${'D' == u.changeType}">解除质押</c:if>
                                    <c:if test="${'E' == u.changeType}">银行入金</c:if>
                                    <c:if test="${'F' == u.changeType}">银行出金</c:if>
                                </c:when>
                                <c:when test="${'SJS' == u.exchange1}">
                                    <c:if test="${'A' == u.changeType}">入金</c:if>
                                    <c:if test="${'B' == u.changeType}">出金</c:if>
                                    <c:if test="${'b' == u.changeType}">买</c:if>
                                    <c:if test="${'s' == u.changeType}">卖</c:if>
                                </c:when>
                            </c:choose>

                        </td>
                        <td>
                            <c:choose>
                                <c:when test="${'NJS' == u.exchange1}"><fmt:formatNumber value="${u.njsTotalMoney}" pattern="0.00" /></c:when>
                                <c:when test="${'SJS' == u.exchange1}"><fmt:formatNumber value="${u.sjsTotalMoney}" pattern="0.00" /></c:when>
                            </c:choose>
                        </td>
                        <td><%--${u.accumulate}--%></td>
                    </tr>
                </c:forEach>
                <c:if test="${0 == list.getItems().size()}">
                    <tr style="text-align: center"><td colspan="10">没有数据</td></tr>
                </c:if>
                </tbody>
            </table>
            <div id="page" currentPage="${list.currentPage}" pageCount="${list.pages}"></div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(function(){
        $("#page").my_page();

        $("#exchange").on("change", function() {
            if ("" != $(this).val()) {
                $("#status option[value='5']").remove();
                $("#status option[value='6']").remove();
                $("#status option[value='7']").remove();
            } else {
                $("#status").append("<option value='5'>注册</option>").append("<option value='6'>登录</option>").append("<option value='7'>未开户</option>");
            }
        });

    });
    function export_excel(){
        $("form[name='searchForm']").append('<input type="hidden" name="isExp" value="1">');
        $("#currentPage").val(1);
        $("form[name='searchForm']").submit();
    }
</script>
<jsp:include page="/WEB-INF/jsp/include/tpl_menu_footer.jsp"/>