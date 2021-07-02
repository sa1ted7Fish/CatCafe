package xyz.salted7fish.catcafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import xyz.salted7fish.catcafe.domain.DictInitialCost;
import xyz.salted7fish.catcafe.domain.DictIrregularCost;
import xyz.salted7fish.catcafe.domain.DictMonthlyCost;
import xyz.salted7fish.catcafe.service.MenuPageService;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MenuPageController {

    @Autowired
    private MenuPageService menuPageService;

    @GetMapping({"/", "/index", "/lists"})
    public String getAllInitialCostCategory(Model model){
        List<DictInitialCost> initialCostCategoryList = new ArrayList<>();
        List<DictIrregularCost> irregularCostCategoryList = new ArrayList<>();
        List<DictMonthlyCost> monthlyCostCategoryList = new ArrayList<>();

        initialCostCategoryList = menuPageService.getAllInitialCostCategory();
        irregularCostCategoryList = menuPageService.getAllIrregularCostCategory();
        monthlyCostCategoryList = menuPageService.getAllMonthlyCostCategory();
        model.addAttribute("initialCostCategoryList", initialCostCategoryList);
        model.addAttribute("irregularCostCategoryList", irregularCostCategoryList);
        model.addAttribute("monthlyCostCategoryList", monthlyCostCategoryList);
        return "index";
    }
}
