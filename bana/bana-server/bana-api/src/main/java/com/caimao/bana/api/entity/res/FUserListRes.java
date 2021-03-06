package com.caimao.bana.api.entity.res;

import java.io.Serializable;
import java.util.Date;

public class FUserListRes implements Serializable {
    private Long userId;
    private String userName;
    private String userRealName;
    private String userNickName;
    private Short userGrade;
    private Integer userScore;
    private String email;
    private String mobile;
    private String idcardKind;
    private String idcard;
    private String userAddress;
    private Date registerDatetime;
    private String registerIp;
    private Date lastLoginDatetime;
    private String lastLoginIp;
    private Integer loginCount;
    private String userStatus;
    private Integer errorCount;
    private String isTrust;
    private String userInit;
    private String userKind;
    private Long refUserId;
    private Date registerDatetimeBegin;
    private Date registerDatetimeEnd;
    private Long caimaoId;
    private String gender;
    private String birthday;
    private String userIntro;
    private String userComefrom;
    private String userQq;
    private String userPhone;
    private String userPhoto;
    private String userSignature;
    private String userOccupation;
    private String userEducation;
    private String invrEmpiric;
    private Integer prohiWithdraw;
    private Integer status;
    private String exchange1;
    private Date createDatetime;
    private String bankId;
    private String bankCard;
    private String njsTotalMoney;
    private float sjsTotalMoney;
    private String dealDate;
    private String changeType; // 交易变动类型：A入金；B出金；C质押；D解除质押；E银行入金；F银行出金

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserRealName() {
        return userRealName;
    }

    public void setUserRealName(String userRealName) {
        this.userRealName = userRealName;
    }

    public String getUserNickName() {
        return userNickName;
    }

    public void setUserNickName(String userNickName) {
        this.userNickName = userNickName;
    }

    public Short getUserGrade() {
        return userGrade;
    }

    public void setUserGrade(Short userGrade) {
        this.userGrade = userGrade;
    }

    public Integer getUserScore() {
        return userScore;
    }

    public void setUserScore(Integer userScore) {
        this.userScore = userScore;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getIdcardKind() {
        return idcardKind;
    }

    public void setIdcardKind(String idcardKind) {
        this.idcardKind = idcardKind;
    }

    public String getIdcard() {
        return idcard;
    }

    public void setIdcard(String idcard) {
        this.idcard = idcard;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public Date getRegisterDatetime() {
        return registerDatetime;
    }

    public void setRegisterDatetime(Date registerDatetime) {
        this.registerDatetime = registerDatetime;
    }

    public String getRegisterIp() {
        return registerIp;
    }

    public void setRegisterIp(String registerIp) {
        this.registerIp = registerIp;
    }

    public Date getLastLoginDatetime() {
        return lastLoginDatetime;
    }

    public void setLastLoginDatetime(Date lastLoginDatetime) {
        this.lastLoginDatetime = lastLoginDatetime;
    }

    public String getLastLoginIp() {
        return lastLoginIp;
    }

    public void setLastLoginIp(String lastLoginIp) {
        this.lastLoginIp = lastLoginIp;
    }

    public Integer getLoginCount() {
        return loginCount;
    }

    public void setLoginCount(Integer loginCount) {
        this.loginCount = loginCount;
    }

    public String getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(String userStatus) {
        this.userStatus = userStatus;
    }

    public Integer getErrorCount() {
        return errorCount;
    }

    public void setErrorCount(Integer errorCount) {
        this.errorCount = errorCount;
    }

    public String getIsTrust() {
        return isTrust;
    }

    public void setIsTrust(String isTrust) {
        this.isTrust = isTrust;
    }

    public String getUserInit() {
        return userInit;
    }

    public void setUserInit(String userInit) {
        this.userInit = userInit;
    }

    public String getUserKind() {
        return userKind;
    }

    public void setUserKind(String userKind) {
        this.userKind = userKind;
    }

    public Long getRefUserId() {
        return refUserId;
    }

    public void setRefUserId(Long refUserId) {
        this.refUserId = refUserId;
    }

    public Date getRegisterDatetimeBegin() {
        return registerDatetimeBegin;
    }

    public void setRegisterDatetimeBegin(Date registerDatetimeBegin) {
        this.registerDatetimeBegin = registerDatetimeBegin;
    }

    public Date getRegisterDatetimeEnd() {
        return registerDatetimeEnd;
    }

    public void setRegisterDatetimeEnd(Date registerDatetimeEnd) {
        this.registerDatetimeEnd = registerDatetimeEnd;
    }

    public Long getCaimaoId() {
        return caimaoId;
    }

    public void setCaimaoId(Long caimaoId) {
        this.caimaoId = caimaoId;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getUserIntro() {
        return userIntro;
    }

    public void setUserIntro(String userIntro) {
        this.userIntro = userIntro;
    }

    public String getUserComefrom() {
        return userComefrom;
    }

    public void setUserComefrom(String userComefrom) {
        this.userComefrom = userComefrom;
    }

    public String getUserQq() {
        return userQq;
    }

    public void setUserQq(String userQq) {
        this.userQq = userQq;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserPhoto() {
        return userPhoto;
    }

    public void setUserPhoto(String userPhoto) {
        this.userPhoto = userPhoto;
    }

    public String getUserSignature() {
        return userSignature;
    }

    public void setUserSignature(String userSignature) {
        this.userSignature = userSignature;
    }

    public String getUserOccupation() {
        return userOccupation;
    }

    public void setUserOccupation(String userOccupation) {
        this.userOccupation = userOccupation;
    }

    public String getUserEducation() {
        return userEducation;
    }

    public void setUserEducation(String userEducation) {
        this.userEducation = userEducation;
    }

    public String getInvrEmpiric() {
        return invrEmpiric;
    }

    public void setInvrEmpiric(String invrEmpiric) {
        this.invrEmpiric = invrEmpiric;
    }

    public Integer getProhiWithdraw() {
        return prohiWithdraw;
    }

    public void setProhiWithdraw(Integer prohiWithdraw) {
        this.prohiWithdraw = prohiWithdraw;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getExchange1() {
        return exchange1;
    }

    public void setExchange1(String exchange1) {
        this.exchange1 = exchange1;
    }

    public Date getCreateDatetime() {
        return createDatetime;
    }

    public void setCreateDatetime(Date createDatetime) {
        this.createDatetime = createDatetime;
    }

    public String getBankId() {
        return bankId;
    }

    public void setBankId(String bankId) {
        this.bankId = bankId;
    }

    public String getBankCard() {
        return bankCard;
    }

    public void setBankCard(String bankCard) {
        this.bankCard = bankCard;
    }

    public String getNjsTotalMoney() {
        return njsTotalMoney;
    }

    public void setNjsTotalMoney(String njsTotalMoney) {
        this.njsTotalMoney = njsTotalMoney;
    }

    public float getSjsTotalMoney() {
        return sjsTotalMoney;
    }

    public void setSjsTotalMoney(float sjsTotalMoney) {
        this.sjsTotalMoney = sjsTotalMoney;
    }

    public String getDealDate() {
        return dealDate;
    }

    public void setDealDate(String dealDate) {
        this.dealDate = dealDate;
    }

    public String getChangeType() {
        return changeType;
    }

    public void setChangeType(String changeType) {
        this.changeType = changeType;
    }

}