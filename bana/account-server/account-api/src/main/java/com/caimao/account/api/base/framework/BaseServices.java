package com.caimao.account.api.base.framework;

import com.caimao.account.api.base.page.ListRange;
import com.caimao.account.api.base.page.Page;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface BaseServices<T extends Serializable, PK> {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds
	 * to the database table orders
	 * 
	 * @mbggenerated Sun Aug 11 13:08:01 CST 2013
	 */
	int deleteByPrimaryKey(PK id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds
	 * to the database table orders
	 * 
	 * @mbggenerated Sun Aug 11 13:08:01 CST 2013
	 */
	int insert(T t);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds
	 * to the database table orders
	 * 
	 * @mbggenerated Sun Aug 11 13:08:01 CST 2013
	 */
	int insertSelective(T t);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds
	 * to the database table orders
	 * 
	 * @mbggenerated Sun Aug 11 13:08:01 CST 2013
	 */
	T selectByPrimaryKey(PK id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds
	 * to the database table orders
	 * 
	 * @mbggenerated Sun Aug 11 13:08:01 CST 2013
	 */
	int updateByPrimaryKeySelective(T t);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds
	 * to the database table orders
	 * 
	 * @mbggenerated Sun Aug 11 13:08:01 CST 2013
	 */
	int updateByPrimaryKey(T t);

	List<T> selectPageList(Map map, Page page);

	List<T> selectList(Map map);
	ListRange<T> selectRangePageList(Map map, Page page);
	int selectCount(Map map);
	public List<T> selectPageList(Map map);
	
	
}
