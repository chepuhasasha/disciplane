import { Router, Response } from "express";
import { LoggerService } from "../logger/logger.servece";
import { IControllerRoute } from "./route.interface";

export abstract class BaseController {
  private readonly _router: Router;
  constructor(private logger: LoggerService) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  public created(res: Response) {
    res.sendStatus(201);
  }

  protected bindRouts(routes: IControllerRoute[]) {
    for (const route of routes) {
      this.logger.log(`[${route.method}] ${route.path}`);
      const handler = route.func.bind(this);
      this.router[route.method](route.path, handler);
    }
  }
}
