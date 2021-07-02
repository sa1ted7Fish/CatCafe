package xyz.salted7fish.catcafe.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.salted7fish.catcafe.domain.DictInitialCost;
import xyz.salted7fish.catcafe.domain.DictIrregularCost;
import xyz.salted7fish.catcafe.domain.DictMonthlyCost;
import xyz.salted7fish.catcafe.mapper.DictInitialCostMapper;
import xyz.salted7fish.catcafe.mapper.DictIrregularCostMapper;
import xyz.salted7fish.catcafe.mapper.DictMonthlyCostMapper;
import xyz.salted7fish.catcafe.service.MenuPageService;

import java.util.List;

@Service
public class MenuPageServiceImpl implements MenuPageService {

    @Autowired
    private DictInitialCostMapper dictInitialCostMapper;

    @Autowired
    private DictMonthlyCostMapper dictMonthlyCostMapper;

    @Autowired
    private DictIrregularCostMapper dictIrregularCostMapper;

    @Override
    public List<DictIrregularCost> getAllIrregularCostCategory() {
        return dictIrregularCostMapper.selectAllIrregularCostCategory();
    }

    @Override
    public List<DictMonthlyCost> getAllMonthlyCostCategory() {
        return dictMonthlyCostMapper.selectAllMonthlyCostCategory();
    }

    @Override
    public List<DictInitialCost> getAllInitialCostCategory() {
        return dictInitialCostMapper.selectAllInitialCostCategory();
    }
}
