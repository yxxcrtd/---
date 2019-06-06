package com.caimao.gjs.server.trade.mina.sjs;

import com.caimao.gjs.server.trade.protocol.sjs.entity.req.FSJSHeartBeatReq;
import org.apache.mina.core.service.IoHandlerAdapter;
import org.apache.mina.core.session.IdleStatus;
import org.apache.mina.core.session.IoSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class SJSMinaHandler extends IoHandlerAdapter {
    private static final Logger logger = LoggerFactory.getLogger(SJSMinaHandler.class);
    private Map<String, SJSTradeMsg> receiveMap = new ConcurrentHashMap<>();

    @Override
    public void sessionCreated(IoSession session) throws Exception {

    }

    @Override
    public void sessionOpened(IoSession session) throws Exception {

    }

    @Override
    public void sessionClosed(IoSession session) throws Exception {

    }

    @Override
    public void sessionIdle(IoSession session, IdleStatus status) throws Exception {
        if (status == IdleStatus.BOTH_IDLE) {
            SJSTradeMsg sjsTradeMsg = new SJSTradeMsg();
            sjsTradeMsg.setUserId("1080012271");
            sjsTradeMsg.setSequence("1234567890");
            sjsTradeMsg.setAdapter("190201");
            sjsTradeMsg.setData(new FSJSHeartBeatReq());
            Object connectNameObj = session.getAttribute("connectName");
            if(connectNameObj != null && "tradeQuerySafe-sjs".equals(connectNameObj.toString())){
                sjsTradeMsg.setEncrypt(false);
            }else{
                sjsTradeMsg.setEncrypt(true);
            }
            session.write(sjsTradeMsg);
        }
    }

    @Override
    public void exceptionCaught(IoSession session, Throwable cause) throws Exception {

    }

    @Override
    public void messageReceived(IoSession session, Object message) throws Exception {
        if(message instanceof SJSTradeMsg){
            SJSTradeMsg sjsTradeMsg = (SJSTradeMsg)message;

            switch (sjsTradeMsg.getAdapter()) {
                case "190201":
                    logger.info("心跳成功");
                    break;
                default:
                    receiveMap.put(sjsTradeMsg.getSequence(), sjsTradeMsg);
                    break;
            }
        }else{
            System.out.println("返回其他信息：" + message.toString());
        }
    }

    @Override
    public void messageSent(IoSession session, Object message) throws Exception {

    }

    public SJSTradeMsg getReceive(String seq) {
        return receiveMap.remove(seq);
    }
}
