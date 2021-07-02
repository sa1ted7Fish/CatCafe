package xyz.salted7fish.catcafe.mapper;

import org.apache.ibatis.annotations.Mapper;
import xyz.salted7fish.catcafe.domain.DictInitialCost;
import xyz.salted7fish.catcafe.domain.DictMonthlyCost;

import java.util.List;

@Mapper
public interface DictMonthlyCostMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DictMonthlyCost record);

    int insertSelective(DictMonthlyCost record);

    DictMonthlyCost selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DictMonthlyCost record);

    int updateByPrimaryKey(DictMonthlyCost record);

    List<DictMonthlyCost> selectAllMonthlyCostCategory();
}