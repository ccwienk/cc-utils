import logging

import sqlalchemy

from deliverydb.model import Base, Scan


class DeliveryDB:
    def __init__(
        self,
        db_conn_url: str,
    ):
        self._engine = sqlalchemy.create_engine(
            db_conn_url,
            echo=True,
            future=True,
        )

        self.Base = Base
        # we configured our own root logger and use log propagation
        # therefore pop streamhandler to not have duplicate output
        logging.getLogger('sqlalchemy.engine.Engine').handlers.pop()
        self.Base.metadata.create_all(self._engine)
        self.Session = sqlalchemy.orm.Session(self._engine)

    def insert_compliance_issue(
        self,
        artifact: dict,
        meta: dict,
        data: dict,
    ):
        scan = Scan(
            artifact=artifact,
            meta=meta,
            data=data,
        )

        self.Session.add(scan)
