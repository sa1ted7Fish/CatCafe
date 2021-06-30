package xyz.salted7fish.catcafe.mapper;

import xyz.salted7fish.catcafe.domain.InitialCost;

public interface InitialCostMapper {
    int deleteByPrimaryKey(Long id);

    int insert(InitialCost record);

    int insertSelective(InitialCost record);

    InitialCost selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(InitialCost record);

    int updateByPrimaryKey(InitialCost record);
}