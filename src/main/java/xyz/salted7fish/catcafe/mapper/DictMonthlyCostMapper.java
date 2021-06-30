package xyz.salted7fish.catcafe.mapper;

import xyz.salted7fish.catcafe.domain.DictMonthlyCost;

public interface DictMonthlyCostMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DictMonthlyCost record);

    int insertSelective(DictMonthlyCost record);

    DictMonthlyCost selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DictMonthlyCost record);

    int updateByPrimaryKey(DictMonthlyCost record);
}