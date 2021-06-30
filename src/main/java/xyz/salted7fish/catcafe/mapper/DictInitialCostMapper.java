package xyz.salted7fish.catcafe.mapper;

import xyz.salted7fish.catcafe.domain.DictInitialCost;

public interface DictInitialCostMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DictInitialCost record);

    int insertSelective(DictInitialCost record);

    DictInitialCost selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DictInitialCost record);

    int updateByPrimaryKey(DictInitialCost record);
}