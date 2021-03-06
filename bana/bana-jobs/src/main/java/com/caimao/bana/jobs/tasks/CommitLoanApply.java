package com.caimao.bana.jobs.tasks;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.caimao.bana.api.service.IP2PJobService;

/**
 * 满标后，自动提交借贷申请，只插入借贷申请，不涉及到资产操作
 * @author yanjg
 * 2015年6月8日
 */
@Component
public class CommitLoanApply {

    @Resource
    private IP2PJobService p2pJobService;
    private static final Logger logger = LoggerFactory.getLogger(CommitLoanApply.class);

    /**
     * 满标后，自动提交借贷申请，只插入借贷申请，不涉及到资产操作
     * 每10分钟更新一次。
     * @throws Exception
     */
    @Scheduled(cron = "0 0/1 * * * ?")
    public void doCommitLoanApply() throws Exception {
        logger.info("开始自动提交借贷申请job。。。");
        p2pJobService.doCommitP2PLoanApply();
        logger.info("自动提交借贷申请job结束");
    }
}
