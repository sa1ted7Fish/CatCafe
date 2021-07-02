package xyz.salted7fish.catcafe.service;

import org.springframework.beans.factory.annotation.Autowired;
import xyz.salted7fish.catcafe.domain.DictInitialCost;
import xyz.salted7fish.catcafe.domain.DictIrregularCost;
import xyz.salted7fish.catcafe.domain.DictMonthlyCost;

import java.util.List;

public interface MenuPageService {
    List<DictInitialCost> getAllInitialCostCategory();

    List<DictIrregularCost> getAllIrregularCostCategory();

    List<DictMonthlyCost> getAllMonthlyCostCategory();
}
