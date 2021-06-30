package xyz.salted7fish.catcafe.mapper;

import xyz.salted7fish.catcafe.domain.DictIrregularCost;

public interface DictIrregularCostMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DictIrregularCost record);

    int insertSelective(DictIrregularCost record);

    DictIrregularCost selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DictIrregularCost record);

    int updateByPrimaryKey(DictIrregularCost record);
}