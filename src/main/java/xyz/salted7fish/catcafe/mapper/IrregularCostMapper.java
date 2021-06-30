package xyz.salted7fish.catcafe.mapper;

import xyz.salted7fish.catcafe.domain.IrregularCost;

public interface IrregularCostMapper {
    int deleteByPrimaryKey(Long id);

    int insert(IrregularCost record);

    int insertSelective(IrregularCost record);

    IrregularCost selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(IrregularCost record);

    int updateByPrimaryKey(IrregularCost record);
}