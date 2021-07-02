package xyz.salted7fish.catcafe.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import xyz.salted7fish.catcafe.domain.DictInitialCost;

import java.util.List;

@Mapper
public interface DictInitialCostMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DictInitialCost record);

    int insertSelective(DictInitialCost record);

    DictInitialCost selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DictInitialCost record);

    int updateByPrimaryKey(DictInitialCost record);

    List<DictInitialCost> selectAllInitialCostCategory();
}