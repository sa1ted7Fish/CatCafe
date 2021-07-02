package xyz.salted7fish.catcafe.mapper;

import org.apache.ibatis.annotations.Mapper;
import xyz.salted7fish.catcafe.domain.DictInitialCost;
import xyz.salted7fish.catcafe.domain.DictIrregularCost;

import java.util.List;

@Mapper
public interface DictIrregularCostMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DictIrregularCost record);

    int insertSelective(DictIrregularCost record);

    DictIrregularCost selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DictIrregularCost record);

    int updateByPrimaryKey(DictIrregularCost record);

    List<DictIrregularCost> selectAllIrregularCostCategory();
}