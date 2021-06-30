package xyz.salted7fish.catcafe.mapper;

import xyz.salted7fish.catcafe.domain.MonthlyCost;

public interface MonthlyCostMapper {
    int deleteByPrimaryKey(Long id);

    int insert(MonthlyCost record);

    int insertSelective(MonthlyCost record);

    MonthlyCost selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(MonthlyCost record);

    int updateByPrimaryKey(MonthlyCost record);
}